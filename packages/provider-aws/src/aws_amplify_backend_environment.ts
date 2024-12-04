import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyBackendEnvironmentArgs {
  app_id: string;
  environment_name: string;
}

export class aws_amplify_backend_environment extends TerraformResource {
  readonly arn!: string;
  readonly deployment_artifacts?: string;
  readonly id?: string;
  readonly stack_name?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAmplifyBackendEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_amplify_backend_environment");
  }
}
