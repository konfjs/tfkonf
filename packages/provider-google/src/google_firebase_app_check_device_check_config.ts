import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFirebaseAppCheckDeviceCheckConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirebaseAppCheckDeviceCheckConfigArgs {
  app_id: string;
  key_id: string;
  private_key: string;
  timeouts: GoogleFirebaseAppCheckDeviceCheckConfigArgsTimeouts;
}
export class google_firebase_app_check_device_check_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly private_key_set!: boolean;
  readonly project?: string;
  readonly token_ttl?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckDeviceCheckConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_device_check_config");
  }
}