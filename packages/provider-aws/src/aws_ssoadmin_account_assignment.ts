import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsoadminAccountAssignmentArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSsoadminAccountAssignmentArgs {
  instance_arn: string;
  permission_set_arn: string;
  principal_id: string;
  principal_type: string;
  target_id: string;
  target_type?: string;
  timeouts: AwsSsoadminAccountAssignmentArgstimeouts;
}
export class aws_ssoadmin_account_assignment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminAccountAssignmentArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_account_assignment");
  }
}