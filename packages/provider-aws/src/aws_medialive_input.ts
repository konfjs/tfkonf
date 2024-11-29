import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMedialiveInputArgsDestinations {
  stream_name: string;
}
export interface AwsMedialiveInputArgsInputDevices {
  id: string;
}
export interface AwsMedialiveInputArgsMediaConnectFlows {
  flow_arn: string;
}
export interface AwsMedialiveInputArgsSources {
  password_param: string;
  url: string;
  username: string;
}
export interface AwsMedialiveInputArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMedialiveInputArgsVpc {
  security_group_ids?: string[];
  subnet_ids: string[];
}
export interface AwsMedialiveInputArgs {
  input_security_groups?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  destinations: AwsMedialiveInputArgsDestinations;
  input_devices: AwsMedialiveInputArgsInputDevices;
  media_connect_flows: AwsMedialiveInputArgsMediaConnectFlows;
  sources: AwsMedialiveInputArgsSources;
  timeouts: AwsMedialiveInputArgsTimeouts;
  vpc: AwsMedialiveInputArgsVpc;
}
export class aws_medialive_input extends TerraformResource {
  readonly arn!: string;
  readonly attached_channels!: string[];
  readonly id?: string;
  readonly input_class!: string;
  readonly input_partner_ids!: string[];
  readonly input_source_type!: string;
  readonly role_arn?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMedialiveInputArgs) {
    super(config, "resource", args, resourceName, "aws_medialive_input");
  }
}