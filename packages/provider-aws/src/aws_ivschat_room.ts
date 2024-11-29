import { TerraformConfig, TerraformResource } from "tfs";
export interface MessageReviewHandler {
  uri?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsIvschatRoomArgs {
  logging_configuration_identifiers?: string[];
  name?: string;
  tags?: {
    [key: string]: string;
  };
  message_review_handler: MessageReviewHandler;
  timeouts: Timeouts;
}
export class aws_ivschat_room extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly maximum_message_length?: number;
  readonly maximum_message_rate_per_second?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIvschatRoomArgs) {
    super(config, "resource", args, resourceName, "aws_ivschat_room");
  }
}