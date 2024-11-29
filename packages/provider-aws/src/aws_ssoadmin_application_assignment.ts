import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsoadminApplicationAssignmentArgs {
  application_arn: string;
  principal_id: string;
  principal_type: string;
}
export class aws_ssoadmin_application_assignment extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminApplicationAssignmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_application_assignment");
  }
}