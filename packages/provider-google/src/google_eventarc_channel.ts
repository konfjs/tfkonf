import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleEventarcChannelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEventarcChannelArgs {
  crypto_key_name?: string;
  location: string;
  name: string;
  third_party_provider?: string;
  timeouts?: GoogleEventarcChannelArgsTimeouts;
}
export class google_eventarc_channel extends TerraformResource {
  readonly activation_token!: string;
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly pubsub_topic!: string;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEventarcChannelArgs) {
    super(config, "resource", args, resourceName, "google_eventarc_channel");
  }
}