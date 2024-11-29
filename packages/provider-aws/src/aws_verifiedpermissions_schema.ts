import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVerifiedpermissionsSchemaArgsdefinition {
  value: string;
}
export interface AwsVerifiedpermissionsSchemaArgs {
  policy_store_id: string;
  definition: AwsVerifiedpermissionsSchemaArgsdefinition;
}
export class aws_verifiedpermissions_schema extends TerraformResource {
  readonly id!: string;
  readonly namespaces!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsSchemaArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_schema");
  }
}