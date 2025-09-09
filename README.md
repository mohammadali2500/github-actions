## 🚀 Git Hooks in This Project

### Commit Message Validation
Ensures all commits follow [Conventional Commits](https://www.conventionalcommits.org/).

### Branch Name Validation
Ensures branches follow the pattern:

- `feature/<task-name>`
- `bugfix/<task-name>`
- `hotfix/<task-name>`
- `release/<version>`

Where `<task-name>` is lowercase with hyphens.

Example:
- `feature/add-login-api`
- `bugfix/fix-null-pointer`
- `release/1.2.0`

Invalid:
- `Feature/Login` ❌
- `fix/bug` ❌
- `hotfix-urgent` ❌