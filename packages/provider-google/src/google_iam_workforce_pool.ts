import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIamWorkforcePoolArgsAccessRestrictionsAllowedServices {
  domain?: string;
}
export interface GoogleIamWorkforcePoolArgsAccessRestrictions {
  disable_programmatic_signin?: boolean;
  allowed_services: GoogleIamWorkforcePoolArgsAccessRestrictionsAllowedServices;
}
export interface GoogleIamWorkforcePoolArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamWorkforcePoolArgs {
  description?: string;
  disabled?: boolean;
  display_name?: string;
  location: string;
  parent: string;
  session_duration?: string;
  workforce_pool_id: string;
  access_restrictions: GoogleIamWorkforcePoolArgsAccessRestrictions;
  timeouts: GoogleIamWorkforcePoolArgstimeouts;
}
export class google_iam_workforce_pool extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamWorkforcePoolArgs) {
    super(config, "resource", args, resourceName, "google_iam_workforce_pool");
  }
}