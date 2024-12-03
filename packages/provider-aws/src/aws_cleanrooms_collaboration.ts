import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCleanroomsCollaborationArgsDataEncryptionMetadata {
  allow_clear_text: boolean;
  allow_duplicates: boolean;
  allow_joins_on_columns_with_different_names: boolean;
  preserve_nulls: boolean;
}
export interface AwsCleanroomsCollaborationArgsMember {
  account_id: string;
  display_name: string;
  member_abilities: string[];
}
export interface AwsCleanroomsCollaborationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCleanroomsCollaborationArgs {
  creator_display_name: string;
  creator_member_abilities: string[];
  description: string;
  name: string;
  query_log_status: string;
  tags?: {
    [key: string]: string;
  };
  data_encryption_metadata: AwsCleanroomsCollaborationArgsDataEncryptionMetadata;
  member: AwsCleanroomsCollaborationArgsMember;
  timeouts?: AwsCleanroomsCollaborationArgsTimeouts;
}
export class aws_cleanrooms_collaboration extends TerraformResource {
  readonly arn!: string;
  readonly create_time!: string;
  readonly id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCleanroomsCollaborationArgs) {
    super(config, "resource", args, resourceName, "aws_cleanrooms_collaboration");
  }
}