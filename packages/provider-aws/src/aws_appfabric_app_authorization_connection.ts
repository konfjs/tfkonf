import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppfabricAppAuthorizationConnectionArgsAuthRequest {
  code: string;
  redirect_uri: string;
}
export interface AwsAppfabricAppAuthorizationConnectionArgsTimeouts {
  create?: string;
}
export interface AwsAppfabricAppAuthorizationConnectionArgs {
  app_authorization_arn: string;
  app_bundle_arn: string;
  auth_request: AwsAppfabricAppAuthorizationConnectionArgsAuthRequest;
  timeouts?: AwsAppfabricAppAuthorizationConnectionArgsTimeouts;
}
export class aws_appfabric_app_authorization_connection extends TerraformResource {
  readonly app!: string;
  readonly id!: string;
  readonly tenant!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppfabricAppAuthorizationConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_appfabric_app_authorization_connection");
  }
}