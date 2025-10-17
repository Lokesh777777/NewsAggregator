package com.newsaggregator.service;

import com.newsaggregator.dto.Article;
import com.newsaggregator.dto.NewsApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@Service
public class NewsService {
    @Value("${newsapi.key}")
    private String apiKey;

    private static final String BASE_URL = "https://newsapi.org/v2";
    private final RestTemplate restTemplate;

    public NewsService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Article> getTopHeadlines(String country, String category) {
        String url = String.format("%s/top-headlines?country=%s&category=%s&apiKey=%s",
                BASE_URL, country, category, apiKey);

        try {
            NewsApiResponse response = restTemplate.getForObject(url, NewsApiResponse.class);
            return response != null ? response.getArticles() : Collections.emptyList();
        } catch (Exception e) {
            return Collections.emptyList();
        }
    }

    public List<Article> searchNews(String query, String sortBy, int pageSize) {
        String url = String.format("%s/everything?q=%s&sortBy=%s&pageSize=%d&apiKey=%s",
                BASE_URL, query, sortBy, pageSize, apiKey);

        try {
            NewsApiResponse response = restTemplate.getForObject(url, NewsApiResponse.class);
            return response != null ? response.getArticles() : Collections.emptyList();
        } catch (Exception e) {
            return Collections.emptyList();
        }
    }
}