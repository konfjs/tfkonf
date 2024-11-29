import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVerifiedpermissionsSchemaArgsDefinition {
  value: string;
}
export interface AwsVerifiedpermissionsSchemaArgs {
  policy_store_id: string;
  definition: AwsVerifiedpermissionsSchemaArgsDefinition;
}
export class aws_verifiedpermissions_schema extends TerraformResource {
  readonly id!: string;
  readonly namespaces!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsSchemaArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_schema");
  }
}