import { TerraformConfig, TerraformResource } from "tfs";
export interface ApiKeyCredential {
  api_key: string;
}
export interface Oauth2Credential {
  client_id: string;
  client_secret: string;
}
export interface Credential {
  api_key_credential: ApiKeyCredential;
  oauth2_credential: Oauth2Credential;
}
export interface Tenant {
  tenant_display_name: string;
  tenant_identifier: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAppfabricAppAuthorizationArgs {
  app: string;
  app_bundle_arn: string;
  auth_type: string;
  tags?: {
    [key: string]: string;
  };
  credential: Credential;
  tenant: Tenant;
  timeouts: Timeouts;
}
export class aws_appfabric_app_authorization extends TerraformResource {
  readonly arn!: string;
  readonly auth_url!: string;
  readonly created_at!: string;
  readonly id!: string;
  readonly persona!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppfabricAppAuthorizationArgs) {
    super(config, "resource", args, resourceName, "aws_appfabric_app_authorization");
  }
}