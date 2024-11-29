import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLexv2modelsBotArgsDataPrivacy {
  child_directed: boolean;
}
export interface AwsLexv2modelsBotArgsMembers {
  alias_id: string;
  alias_name: string;
  id: string;
  name: string;
  version: string;
}
export interface AwsLexv2modelsBotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexv2modelsBotArgs {
  description?: string;
  idle_session_ttl_in_seconds: number;
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  test_bot_alias_tags?: {
    [key: string]: string;
  };
  data_privacy: AwsLexv2modelsBotArgsDataPrivacy;
  members: AwsLexv2modelsBotArgsMembers;
  timeouts?: AwsLexv2modelsBotArgsTimeouts;
}
export class aws_lexv2models_bot extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsBotArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_bot");
  }
}