import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSyntheticsGroupAssociationArgs {
  canary_arn: string;
  group_name: string;
}
export class aws_synthetics_group_association extends TerraformResource {
  readonly group_arn!: string;
  readonly group_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSyntheticsGroupAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_synthetics_group_association");
  }
}