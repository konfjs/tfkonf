import { TerraformConfig, TerraformResource } from "tfs";
export interface EventFilter {
  source: string;
}
export interface AwsAppintegrationsEventIntegrationArgs {
  description?: string;
  eventbridge_bus: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  event_filter: EventFilter;
}
export class aws_appintegrations_event_integration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppintegrationsEventIntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_appintegrations_event_integration");
  }
}