import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesv2ContactListArgsTopic {
  default_subscription_status: string;
  description?: string;
  display_name: string;
  topic_name: string;
}
export interface AwsSesv2ContactListArgs {
  contact_list_name: string;
  description?: string;
  tags?: {
    [key: string]: string;
  };
  topic: AwsSesv2ContactListArgsTopic;
}
export class aws_sesv2_contact_list extends TerraformResource {
  readonly arn!: string;
  readonly created_timestamp!: string;
  readonly id?: string;
  readonly last_updated_timestamp!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2ContactListArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_contact_list");
  }
}