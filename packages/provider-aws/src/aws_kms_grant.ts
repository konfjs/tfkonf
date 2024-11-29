import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKmsGrantArgsConstraints {
  encryption_context_equals?: {
    [key: string]: string;
  };
  encryption_context_subset?: {
    [key: string]: string;
  };
}
export interface AwsKmsGrantArgs {
  grant_creation_tokens?: string[];
  grantee_principal: string;
  key_id: string;
  name?: string;
  operations: string[];
  retire_on_delete?: boolean;
  retiring_principal?: string;
  constraints: AwsKmsGrantArgsConstraints;
}
export class aws_kms_grant extends TerraformResource {
  readonly grant_id!: string;
  readonly grant_token!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsGrantArgs) {
    super(config, "resource", args, resourceName, "aws_kms_grant");
  }
}