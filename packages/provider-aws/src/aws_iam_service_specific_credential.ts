import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIamServiceSpecificCredentialArgs {
  service_name: string;
  status?: string;
  user_name: string;
}
export class aws_iam_service_specific_credential extends TerraformResource {
  readonly id?: string;
  readonly service_password!: string;
  readonly service_specific_credential_id!: string;
  readonly service_user_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamServiceSpecificCredentialArgs) {
    super(config, "resource", args, resourceName, "aws_iam_service_specific_credential");
  }
}