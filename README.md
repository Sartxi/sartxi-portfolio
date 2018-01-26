## Methods used by Super Users.

### Methods specific to organizations (auto-groups).

`POST /auth/super/organizations` - create a new organization

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Required
* `is_active` - Optional
* `[ groups ]` - Optional
* `[ regions ]` - Optional

Saves a new organization with active/inactive and groups/regions options.

***

`PUT /auth/super/organizations/:orgId` - Update an organization

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Optional
* `is_active` - Optional

Updates a organization name or active/inactive.

***

### Methods specific to stores (dealerships/vendors) by Super Admin.

`POST /auth/super/store` - create a new store

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Required
* `is_active` - Optional
* `address1` - Optional
* `address2` - Optional
* `city` - Optional
* `state` - Optional
* `zip` - Optional
* `phone` - Optional
* `store_group` - Optional
* `[ groups ]` - Optional
* `region` - Optional
* `store_type` - Optional

Saves a new store with active/inactive and groups/regions options.

***

`PUT /auth/super/store/:storeId` - Update an store or mark inactive

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Optional
* `is_active` - Optional
* `address1` - Optional
* `address2` - Optional
* `city` - Optional
* `state` - Optional
* `zip` - Optional
* `phone` - Optional

Updates a store name or active/inactive.





