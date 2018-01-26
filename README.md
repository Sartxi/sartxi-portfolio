## Methods specific to a Super Admin Auto Groups.

`POST /auth/super/organizations` - create new auto group

Required permission: `IS_SUPER_USER`

Body parameters:

* `name` - Required
* `is_active` - Optional
* `[ groups ]` - Optional
* `[ regions ]` - Optional

Saves a new organization with active/inactive and groups/regions options.

***

`PUT /auth/super/organizations/:orgId` - Change the inventory type (e.g. Wholesale, Retail) of an inventory item.

Body parameters:

* `name` - Optional
* `is_active` - Optional

Updates a organization name or active/inactive.


