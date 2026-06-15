Stored Procedure Analysis Prompt
Read CurrencySetupController, CurrencyApprovalController,
CurrencyService, JDBC repositories and all related stored procedures.

Create a specification document describing:

1. Business rules
2. Validations
3. Status transitions
4. Tables used
5. Read operations
6. Write operations
7. Audit updates
8. History updates

Do not generate code.

Create the specification in markdown format.

Entity Generation Prompt
Read:
- jdbc-to-jpa-migration.md
- currency-module.md

Analyze the stored procedures and tables.

Generate JPA entities.

Requirements:
- Java 21
- Spring Boot 3
- Hibernate 6
- SQL Server

Follow the existing JPA conventions used elsewhere in the project.

Repository Generation Prompt
Read:
- currency-module.md

Analyze the JDBC repository implementation.

Generate Spring Data JPA repositories.

Requirements:
- Preserve behaviour
- Preserve query results
- Follow existing project repository patterns

List Screen Migration Prompt
Read:
- CurrencySetupController
- CurrencyService
- CurrencyJdbcRepository

Migrate the currency list endpoint from JDBC to JPA.

Constraints:
- No endpoint changes
- No DTO changes
- No response changes
- No pagination changes
- No sorting changes

Generate:
1. Repository changes
2. Service changes
3. Integration tests

Detail Screen Migration Prompt
Migrate the currency detail endpoint from JDBC to JPA.

Constraints:
- Preserve response structure
- Preserve validations
- Preserve business rules

Generate:
1. Repository changes
2. Service changes
3. Integration tests

Submit Operation Prompt
Analyze the existing submit implementation.

Create a JPA implementation.

Requirements:
- Preserve status transitions
- Preserve validations
- Preserve audit updates
- Preserve transaction boundaries

Generate tests verifying identical behaviour.

Approve Operation Prompt
Analyze the existing approve implementation.

Create a JPA implementation.

Requirements:
- Preserve approval logic
- Preserve audit updates
- Preserve transaction boundaries

Generate tests verifying identical behaviour.

Reject Operation Prompt
Analyze the existing reject implementation.

Create a JPA implementation.

Requirements:
- Preserve rejection logic
- Preserve audit updates
- Preserve transaction boundaries

Generate tests verifying identical behaviour.

Dropdown APIs Prompt
Analyze all dropdown endpoints.

Replace JDBC implementation with JPA.

Requirements:
- Preserve values
- Preserve ordering
- Preserve response DTOs

Generate tests verifying identical results.

History APIs Prompt
Analyze all history endpoints.

Replace JDBC implementation with JPA.

Requirements:
- Preserve history records
- Preserve sorting
- Preserve response DTOs

Generate tests verifying identical results.

Final Verification Prompt
Compare the original JDBC implementation and the new JPA implementation.

Verify:

1. Endpoint URLs unchanged
2. Request DTOs unchanged
3. Response DTOs unchanged
4. JSON contracts unchanged
5. Business rules unchanged
6. Status transitions unchanged
7. Audit updates unchanged
8. Frontend behaviour unchanged

Create a migration verification report.

Identify any behavioural differences.

For your project, the most effective approach would be to migrate in this order:
1. Dropdown APIs
2. History APIs
3. List APIs
4. Detail APIs
5. Add Currency
6. Submit Currency
7. Approve Currency
8. Reject Currency
9. Discard




