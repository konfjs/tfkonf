import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNetworkInterfaceAttachmentArgs {
  device_index: number;
  instance_id: string;
  network_interface_id: string;
}
export class aws_network_interface_attachment extends TerraformResource {
  readonly attachment_id!: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkInterfaceAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_network_interface_attachment");
  }
}