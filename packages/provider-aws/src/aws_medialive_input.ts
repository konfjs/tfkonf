import { TerraformConfig, TerraformResource } from "tfs";
export interface Destinations {
  stream_name: string;
}
export interface InputDevices {
  id: string;
}
export interface MediaConnectFlows {
  flow_arn: string;
}
export interface Sources {
  password_param: string;
  url: string;
  username: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Vpc {
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
  destinations: Destinations;
  input_devices: InputDevices;
  media_connect_flows: MediaConnectFlows;
  sources: Sources;
  timeouts: Timeouts;
  vpc: Vpc;
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