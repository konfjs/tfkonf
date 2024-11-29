import { TerraformConfig, TerraformResource } from "tfs";
export interface LexBot {
  name: string;
}
export interface AwsConnectBotAssociationArgs {
  instance_id: string;
  lex_bot: LexBot;
}
export class aws_connect_bot_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectBotAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_connect_bot_association");
  }
}