Methods specific to a dealership (store endpoints are more generic).

***

[/auth/dealer/:storeId/task](AuthDealerTask)

***

`POST /auth/dealer/:storeId/send-vehicle-info/:inventoryItemId` - send vehicle information to a customer

Required permission: `SHARE_INVENTORY_DETAILS`

Body parameters:

* `customer_name` - Required
* `customer_email` - Optional
* `customer_phone` - Optional

Saves the information in a table with an expiration date.  Can be accessed by the customer through a website URL generated using a guid specific to the customer request.

***

`POST /auth/dealer/:storeId/inventory-item/:inventoryItemId/type/:typeId` - Change the inventory type (e.g. Wholesale, Retail) of an inventory item.

***

`DELETE /auth/dealer/:storeId/task/:taskId` - Perform a soft delete on a task (set `is_active = false`).  

Required permission: `REMOVE_TASK`

Validates that the task is in an Assigned or Unassigned status.  Tasks that are in a completed or approved status cannot be deleted.  Since the record itself is not deleted from the database, it also removes any assigned vendor and reverts the status to Unassigned.

***

`PUT /auth/dealer/:storeId/task/:taskId/vendor/:vendorId` - Assigns (or unassigns) a vendor to a task

Required permission: `EDIT_TASK`

The task must exist for the store and be either unassigned or assigned.  It must also have a `service_id`.  

By passing `:vendorId = 0`, the task is changed to Unassigned with a null `assigned_vendor_id`.  If a non-zero vendor id is passed, it must be a store approved vendor for the service.  The cost will be filled in with the approved `base_price`.


