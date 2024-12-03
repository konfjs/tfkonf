import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIdentitystoreGroupArgs {
  description?: string;
  display_name: string;
  identity_store_id: string;
}
export class aws_identitystore_group extends TerraformResource {
  readonly external_ids!: any[];
  readonly group_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIdentitystoreGroupArgs) {
    super(config, "resource", args, resourceName, "aws_identitystore_group");
  }
}