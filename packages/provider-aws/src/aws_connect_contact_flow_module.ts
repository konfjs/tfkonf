import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectContactFlowModuleArgs {
  content_hash?: string;
  description?: string;
  filename?: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_connect_contact_flow_module extends TerraformResource {
  readonly arn!: string;
  readonly contact_flow_module_id!: string;
  readonly content?: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectContactFlowModuleArgs) {
    super(config, "resource", args, resourceName, "aws_connect_contact_flow_module");
  }
}
