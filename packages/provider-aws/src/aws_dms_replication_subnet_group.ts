import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDmsReplicationSubnetGroupArgs {
  replication_subnet_group_description: string;
  replication_subnet_group_id: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_dms_replication_subnet_group extends TerraformResource {
  readonly id?: string;
  readonly replication_subnet_group_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsReplicationSubnetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_dms_replication_subnet_group");
  }
}