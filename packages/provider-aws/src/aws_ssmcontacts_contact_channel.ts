import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSsmcontactsContactChannelArgsDeliveryAddress {
  simple_address: string;
}
export interface AwsSsmcontactsContactChannelArgs {
  contact_id: string;
  name: string;
  type: string;
  delivery_address: AwsSsmcontactsContactChannelArgsDeliveryAddress;
}
export class aws_ssmcontacts_contact_channel extends TerraformResource {
  readonly activation_status!: string;
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmcontactsContactChannelArgs) {
    super(config, "resource", args, resourceName, "aws_ssmcontacts_contact_channel");
  }
}