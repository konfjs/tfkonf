import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleServiceAccountArgsTimeouts {
  create?: string;
}
export interface GoogleServiceAccountArgs {
  account_id: string;
  create_ignore_already_exists?: boolean;
  description?: string;
  disabled?: boolean;
  display_name?: string;
  timeouts?: GoogleServiceAccountArgsTimeouts;
}
export class google_service_account extends TerraformResource {
  readonly email!: string;
  readonly id?: string;
  readonly member!: string;
  readonly name!: string;
  readonly project?: string;
  readonly unique_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceAccountArgs) {
    super(config, "resource", args, resourceName, "google_service_account");
  }
}