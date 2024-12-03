import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsFinspaceKxDataviewArgsSegmentConfigurations {
  db_paths: string[];
  on_demand?: boolean;
  volume_name: string;
}
export interface AwsFinspaceKxDataviewArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFinspaceKxDataviewArgs {
  auto_update: boolean;
  availability_zone_id?: string;
  az_mode: string;
  changeset_id?: string;
  database_name: string;
  description?: string;
  environment_id: string;
  name: string;
  read_write?: boolean;
  tags?: {
    [key: string]: string;
  };
  segment_configurations: AwsFinspaceKxDataviewArgsSegmentConfigurations;
  timeouts?: AwsFinspaceKxDataviewArgsTimeouts;
}
export class aws_finspace_kx_dataview extends TerraformResource {
  readonly arn!: string;
  readonly created_timestamp!: string;
  readonly id?: string;
  readonly last_modified_timestamp!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxDataviewArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_dataview");
  }
}