import { TerraformConfig, TerraformResource } from "tfs";
export interface CognitoMemberDefinition {
  client_id: string;
  user_group: string;
  user_pool: string;
}
export interface OidcMemberDefinition {
  groups: string[];
}
export interface MemberDefinition {
  cognito_member_definition: CognitoMemberDefinition;
  oidc_member_definition: OidcMemberDefinition;
}
export interface NotificationConfiguration {
  notification_topic_arn?: string;
}
export interface IamPolicyConstraints {}
export interface S3Presign {
  iam_policy_constraints: IamPolicyConstraints;
}
export interface WorkerAccessConfiguration {
  s3_presign: S3Presign;
}
export interface AwsSagemakerWorkteamArgs {
  description: string;
  tags?: {
    [key: string]: string;
  };
  workforce_name?: string;
  workteam_name: string;
  member_definition: MemberDefinition;
  notification_configuration: NotificationConfiguration;
  worker_access_configuration: WorkerAccessConfiguration;
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