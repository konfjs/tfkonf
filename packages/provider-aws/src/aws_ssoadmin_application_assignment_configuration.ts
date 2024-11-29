import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSsoadminApplicationAssignmentConfigurationArgs {
  application_arn: string;
  assignment_required: boolean;
}
export class aws_ssoadmin_application_assignment_configuration extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminApplicationAssignmentConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_application_assignment_configuration");
  }
}