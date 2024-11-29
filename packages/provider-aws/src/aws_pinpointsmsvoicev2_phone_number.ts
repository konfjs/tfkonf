import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPinpointsmsvoicev2PhoneNumberArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsPinpointsmsvoicev2PhoneNumberArgs {
  iso_country_code: string;
  message_type: string;
  number_capabilities: string[];
  number_type: string;
  registration_id?: string;
  tags?: {
    [key: string]: string;
  };
  two_way_channel_arn?: string;
  timeouts?: AwsPinpointsmsvoicev2PhoneNumberArgsTimeouts;
}
export class aws_pinpointsmsvoicev2_phone_number extends TerraformResource {
  readonly arn!: string;
  readonly deletion_protection_enabled?: boolean;
  readonly id!: string;
  readonly monthly_leasing_price!: string;
  readonly opt_out_list_name?: string;
  readonly phone_number!: string;
  readonly self_managed_opt_outs_enabled?: boolean;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly two_way_channel_enabled?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointsmsvoicev2PhoneNumberArgs) {
    super(config, "resource", args, resourceName, "aws_pinpointsmsvoicev2_phone_number");
  }
}