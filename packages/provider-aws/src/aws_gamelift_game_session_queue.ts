import { TerraformConfig, TerraformResource } from "tfs";
export interface PlayerLatencyPolicy {
  maximum_individual_player_latency_milliseconds: number;
  policy_duration_seconds?: number;
}
export interface AwsGameliftGameSessionQueueArgs {
  custom_event_data?: string;
  destinations?: string[];
  name: string;
  notification_target?: string;
  tags?: {
    [key: string]: string;
  };
  timeout_in_seconds?: number;
  player_latency_policy: PlayerLatencyPolicy;
}
export class aws_gamelift_game_session_queue extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGameliftGameSessionQueueArgs) {
    super(config, "resource", args, resourceName, "aws_gamelift_game_session_queue");
  }
}