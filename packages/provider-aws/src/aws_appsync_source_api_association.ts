import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppsyncSourceApiAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAppsyncSourceApiAssociationArgs {
  description?: string;
  timeouts: AwsAppsyncSourceApiAssociationArgsTimeouts;
}
export class aws_appsync_source_api_association extends TerraformResource {
  readonly arn!: string;
  readonly association_id!: string;
  readonly id!: string;
  readonly merged_api_arn?: string;
  readonly merged_api_id?: string;
  readonly source_api_arn?: string;
  readonly source_api_association_config?: any[];
  readonly source_api_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncSourceApiAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_source_api_association");
  }
}