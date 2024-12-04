import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightIamPolicyAssignmentArgsIdentities {
  group?: string[];
  user?: string[];
}

export interface AwsQuicksightIamPolicyAssignmentArgs {
  assignment_name: string;
  assignment_status: string;
  policy_arn?: string;
  identities: AwsQuicksightIamPolicyAssignmentArgsIdentities;
}

export class aws_quicksight_iam_policy_assignment extends TerraformResource {
  readonly assignment_id!: string;
  readonly aws_account_id?: string;
  readonly id!: string;
  readonly namespace?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightIamPolicyAssignmentArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_iam_policy_assignment");
  }
}
