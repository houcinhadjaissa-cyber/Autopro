# Autopro Decision Rules

This file defines how project decisions should be handled.

---

# Confirmed Requirements

When the owner gives a clear answer or requirement, it should be treated as a fixed Autopro requirement.

Use strong wording such as:

- Autopro must
- Autopro will
- The system requires
- The platform needs

Avoid weak wording such as:

- may eventually
- maybe
- could
- might

Unless the feature is truly optional, legally dependent, API-dependent, or intentionally planned for a later phase.

---

# Day-One Rule

Autopro must be designed with the correct backbone from day one.

This means the architecture, database planning, roles, permissions, billing logic, shipping logic, product data logic, and platform structure must not block future expansion.

Important distinction:

## Day-one structure

The system must be designed from the beginning to support the full long-term platform.

## Day-one launch

Not every advanced feature must be fully built in the first public launch, but the first launch must not use a structure that prevents the full platform later.

---

# Feature Suggestion Rule

When the AI assistant suggests features based on proven marketplace/e-commerce/platform patterns, the assistant should ask the owner whether to:

```txt
Keep
Change
Remove
