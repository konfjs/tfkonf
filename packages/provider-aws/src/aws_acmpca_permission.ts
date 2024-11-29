import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAcmpcaPermissionArgs {
  actions: string[];
  certificate_authority_arn: string;
  principal: string;
}
export class aws_acmpca_permission extends TerraformResource {
  readonly id?: string;
  readonly policy!: string;
  readonly source_account?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmpcaPermissionArgs) {
    super(config, "resource", args, resourceName, "aws_acmpca_permission");
  }
}