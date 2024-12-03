import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsConnectBotAssociationArgsLexBot {
  name: string;
}
export interface AwsConnectBotAssociationArgs {
  instance_id: string;
  lex_bot: AwsConnectBotAssociationArgsLexBot;
}
export class aws_connect_bot_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectBotAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_connect_bot_association");
  }
}