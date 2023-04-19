const API_BASE_URL = "https://rosetta.so/api";

export class RosettaClient {
  constructor(
    private projectId: string,
    private clientId: string,
    private clientSecret: string
  ) {}

  private async request<ResponseType = any>(
    ...[input, init]: Parameters<typeof fetch>
  ) {
    const initWithApiParams = {
      ...init,
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
        "x-api-client-id": this.clientId,
        "x-api-client-secret": this.clientSecret,
      },
    };

    const response = await fetch(`${API_BASE_URL}${input}`, initWithApiParams);
    const json = response.json();
    return json as ResponseType;
  }

  async getLocale(locale: string = "en") {
    return this.request<Record<string, string>>(`/${this.projectId}/${locale}`);
  }
}
