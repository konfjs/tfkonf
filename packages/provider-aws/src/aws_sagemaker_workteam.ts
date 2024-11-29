import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerWorkteamArgsMemberDefinitionCognitoMemberDefinition {
  client_id: string;
  user_group: string;
  user_pool: string;
}
export interface AwsSagemakerWorkteamArgsMemberDefinitionOidcMemberDefinition {
  groups: string[];
}
export interface AwsSagemakerWorkteamArgsMemberDefinition {
  cognito_member_definition: AwsSagemakerWorkteamArgsMemberDefinitionCognitoMemberDefinition;
  oidc_member_definition: AwsSagemakerWorkteamArgsMemberDefinitionOidcMemberDefinition;
}
export interface AwsSagemakerWorkteamArgsNotificationConfiguration {
  notification_topic_arn?: string;
}
export interface AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3PresignIamPolicyConstraints {}
export interface AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3Presign {
  iam_policy_constraints: AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3PresignIamPolicyConstraints;
}
export interface AwsSagemakerWorkteamArgsWorkerAccessConfiguration {
  s3_presign: AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3Presign;
}
export interface AwsSagemakerWorkteamArgs {
  description: string;
  tags?: {
    [key: string]: string;
  };
  workforce_name?: string;
  workteam_name: string;
  member_definition: AwsSagemakerWorkteamArgsMemberDefinition;
  notification_configuration: AwsSagemakerWorkteamArgsNotificationConfiguration;
  worker_access_configuration: AwsSagemakerWorkteamArgsWorkerAccessConfiguration;
}
export class aws_sagemaker_workteam extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly subdomain!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerWorkteamArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_workteam");
  }
}