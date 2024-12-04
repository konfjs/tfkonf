import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaCodeSigningConfigArgsAllowedPublishers {
  signing_profile_version_arns: string[];
}

export interface AwsLambdaCodeSigningConfigArgsPolicies {
  untrusted_artifact_on_deployment: string;
}

export interface AwsLambdaCodeSigningConfigArgs {
  description?: string;
  tags?: { [key: string]: string };
  allowed_publishers: AwsLambdaCodeSigningConfigArgsAllowedPublishers;
  policies: AwsLambdaCodeSigningConfigArgsPolicies;
}

export class aws_lambda_code_signing_config extends TerraformResource {
  readonly arn!: string;
  readonly config_id!: string;
  readonly id?: string;
  readonly last_modified!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaCodeSigningConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_code_signing_config");
  }
}
