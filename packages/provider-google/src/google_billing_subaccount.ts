import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBillingSubaccountArgs {
  deletion_policy?: string;
  display_name: string;
  master_billing_account: string;
}
export class google_billing_subaccount extends TerraformResource {
  readonly billing_account_id!: string;
  readonly id?: string;
  readonly name!: string;
  readonly open!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingSubaccountArgs) {
    super(config, "resource", args, resourceName, "google_billing_subaccount");
  }
}