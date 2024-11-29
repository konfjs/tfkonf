import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmincidentsReplicationSetArgsregion {
  kms_key_arn?: string;
  name: string;
}
export interface AwsSsmincidentsReplicationSetArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSsmincidentsReplicationSetArgs {
  tags?: {
    [key: string]: string;
  };
  region: AwsSsmincidentsReplicationSetArgsregion;
  timeouts: AwsSsmincidentsReplicationSetArgstimeouts;
}
export class aws_ssmincidents_replication_set extends TerraformResource {
  readonly arn!: string;
  readonly created_by!: string;
  readonly deletion_protected!: boolean;
  readonly id?: string;
  readonly last_modified_by!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmincidentsReplicationSetArgs) {
    super(config, "resource", args, resourceName, "aws_ssmincidents_replication_set");
  }
}