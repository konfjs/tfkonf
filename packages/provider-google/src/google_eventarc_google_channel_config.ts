import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEventarcGoogleChannelConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEventarcGoogleChannelConfigArgs {
  crypto_key_name?: string;
  location: string;
  name: string;
  timeouts?: GoogleEventarcGoogleChannelConfigArgsTimeouts;
}

export class google_eventarc_google_channel_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleEventarcGoogleChannelConfigArgs) {
    super(config, "resource", args, resourceName, "google_eventarc_google_channel_config");
  }
}
