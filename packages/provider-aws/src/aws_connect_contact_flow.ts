import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectContactFlowArgs {
  content_hash?: string;
  description?: string;
  filename?: string;
  instance_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
}
export class aws_connect_contact_flow extends TerraformResource {
  readonly arn!: string;
  readonly contact_flow_id!: string;
  readonly content?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectContactFlowArgs) {
    super(config, "resource", args, resourceName, "aws_connect_contact_flow");
  }
}