Currency Module Migration Specification

Module Name

Currency Management

Objective

Replace JDBC and Stored Procedure implementations with Spring Data JPA.

Controllers

CurrencySetupController

Purpose:
Manage currency creation and submission.

Capabilities:

* View currency list
* View currency details
* Add currency
* Submit currency
* Discard changes
* Retrieve dropdown data
* Retrieve history data

CurrencyApprovalController

Purpose:
Approve submitted currencies.

Capabilities:

* View submitted currency list
* View currency details
* Approve currency
* Reject currency
* Discard changes
* Retrieve dropdown data
* Retrieve history data

⸻

Migration Constraints

Must NOT change:

* Controller class names
* Endpoint URLs
* Request DTOs
* Response DTOs
* JSON structure
* Frontend screens
* React components
* Authentication
* Authorization
* Database schema

⸻

Existing Behaviour

Current implementation:

Controller
→ Service
→ JDBC Repository
→ Stored Procedures
→ SQL Server

Target implementation:

Controller
→ Service
→ JPA Repository
→ SQL Server

⸻

Business Operations

Currency List

Display available currencies.

Requirements:

* Existing filtering must remain unchanged.
* Existing sorting must remain unchanged.
* Existing pagination must remain unchanged.

⸻

Currency Detail

Display complete currency information.

Requirements:

* Existing fields must remain unchanged.
* Existing response structure must remain unchanged.

⸻

Add Currency

Requirements:

* Existing validations must remain unchanged.
* Existing audit fields must remain unchanged.

⸻

Submit Currency

Requirements:

* Existing status transition must remain unchanged.
* Existing validations must remain unchanged.

⸻

Approve Currency

Requirements:

* Existing approval logic must remain unchanged.
* Existing audit updates must remain unchanged.

⸻

Reject Currency

Requirements:

* Existing rejection logic must remain unchanged.
* Existing audit updates must remain unchanged.

⸻

Discard Currency

Requirements:

* Existing discard behaviour must remain unchanged.

⸻

Dropdown APIs

Requirements:

* Existing values must remain unchanged.
* Existing sorting must remain unchanged.
* Existing response structure must remain unchanged.

⸻

History APIs

Requirements:

* Existing history records must remain unchanged.
* Existing sorting must remain unchanged.

⸻

Testing Requirements

Verify:

* Existing API contracts remain unchanged.
* Existing frontend functionality remains unchanged.
* Existing business rules remain unchanged.
* Existing database updates remain unchanged.

Regression tests required before removing JDBC implementation.