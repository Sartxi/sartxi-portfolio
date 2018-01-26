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

### Methods specific to stores (dealerships/vendors).

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

***

### Methods specific to groups (groups for auto-groups).

`POST /auth/super/group` - create a new group in auto group

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Required
* `organization_id` - Required

Saves a new group for auto-groups.

***

`PUT /auth/super/group/:groupId` - Update a group in auto group

Required permission: `IS_SUPER_USER`

Body parameters:

* `id` - Required
* `name` - Optional

Updates a group name.

***

### Methods specific to organization regions (regions for auto-groups).

`POST /auth/super/region` - create a new region in auto group

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Required
* `organization_id` - Required
* `is_active` - Optional (defaults to true)

Saves a new region for auto-groups.

***

`PUT /auth/super/region/:regionId` - Update a region in auto group

Required permission: `IS_SUPER_USER`

Body parameters:

* `id` - Required
* `name` - Optional
* `is_active` - Optional

Updates a region name or set them active/inactive.

***

### Methods specific to application settings.

`POST /auth/super/app_setting` - create a new app setting

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Required
* `value` - Required

Saves a application setting.

***

`PUT /auth/super/app_setting/:settingId` - Update a app setting value

Required permission: `IS_SUPER_USER`

Body parameters:

* `id` - Required
* `value` - Optional

Updates a application settings value


