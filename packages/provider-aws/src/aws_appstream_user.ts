import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppstreamUserArgs {
  authentication_type: string;
  enabled?: boolean;
  first_name?: string;
  last_name?: string;
  send_email_notification?: boolean;
  user_name: string;
}
export class aws_appstream_user extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamUserArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_user");
  }
}