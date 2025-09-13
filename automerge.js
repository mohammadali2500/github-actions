module.exports = async ({ github, context, core }) => {
  // Get PR number from context
  const prNumber = context.payload.pull_request?.number;
  if (!prNumber) {
    core.setFailed("❌ No PR number found in context.");
    return;
  }

  const owner = context.repo.owner;
  const repo = context.repo.repo;

  // Fetch PR details
  let pr;
  try {
    const { data } = await github.rest.pulls.get({
      owner,
      repo,
      pull_number: prNumber,
    });
    pr = data;
  } catch (error) {
    core.setFailed(`❌ Failed to fetch PR #${prNumber}: ${error.message}`);
    return;
  }

  // Check if already merged
  if (pr.merged) {
    console.log(`⚠️ PR #${prNumber} is already merged. Skipping.`);
    return;
  }

  // Determine merge method based on head branch
  const headBranch = pr.head.ref;
  let mergeMethod = "merge";
  if (headBranch.startsWith("feature/") || headBranch.startsWith("bugfix/")) {
    mergeMethod = "squash";
  }

  // Merge the PR
  try {
    await github.rest.pulls.merge({
      owner,
      repo,
      pull_number: prNumber,
      merge_method: mergeMethod,
    });
    console.log(`✅ PR #${prNumber} merged using '${mergeMethod}' method.`);

    // Delete branch after merge (optional)
    await github.rest.git.deleteRef({
      owner,
      repo,
      ref: `heads/${headBranch}`,
    });
    console.log(`🗑️ Deleted branch ${headBranch}`);
  } catch (error) {
    core.setFailed(`❌ Failed to merge PR #${prNumber}: ${error.message}`);
  }
};