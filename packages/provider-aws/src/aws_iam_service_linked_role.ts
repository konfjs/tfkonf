import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamServiceLinkedRoleArgs {
  aws_service_name: string;
  custom_suffix?: string;
  description?: string;
  tags?: { [key: string]: string };
}

export class aws_iam_service_linked_role extends TerraformResource {
  readonly arn!: string;
  readonly create_date!: string;
  readonly id?: string;
  readonly name!: string;
  readonly path!: string;
  readonly tags_all?: { [key: string]: string };
  readonly unique_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsIamServiceLinkedRoleArgs) {
    super(config, "resource", args, resourceName, "aws_iam_service_linked_role");
  }
}
